import React from "react";
import Link from "next/link";

import { getCurrentUser, storage, db } from "@lib/firebase";
import withAuth from "@src/helpers/withAuth";
import { auth, firebase } from "@src/firebase";
import generateRandomId from "@src/helpers/generateRandomId";
import acceptImageFileType from "@src/helpers/acceptImageFileType";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import Button from "@components/button/Button";
import Input from "@components/form/Input";
import FormItem from "@components/form/FormItem";
import HelperText from "@components/form/HelperText";
import EditNav from "./EditNav";

import Notice from "@icons/ui/notice.js";
import Password from "@icons/ui/password";

/* 入力された文・値は保存 */
export class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      profileImageUrl: "",
    };
  }

  async componentDidMount() {
    // TODO: Firestoreからユーザ情報を取得
    try {
      const user = getCurrentUser();
      const userDoc = await db.collection("users").doc(user.uid).get();
      console.log(userDoc);
      this.setState({
        name: userDoc.data.name,
        about: userDoc.data.about,
        profileImageUrl: userDoc.data.image,
      });
    } catch (error) {
      console.error(error);
    }
  }

  onClickProfileImage = () => {
    if (this.inputRef.current) {
      this.inputRef.current.click();
    }
  };

  onChangeProfileImage = async (event) => {
    if (event.target.files === null) {
      return;
    }
    const file = event.target.files.item(0);
    if (file === null) {
      return;
    }

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({
          profileImageUrl: reader.result,
        });
      };

      // Firebase Storageへアップロード
      const user = getCurrentUser();
      const ref = storage.ref();
      const fileName = `${generateRandomId()}.jpg`;
      await ref.child(`images/profile/${user.uid}/${fileName}`).put(file);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <BaseLayout>
        <Column sidenav>
          <EditNav/>
          <div>
            <HeroText small="アカウントの削除">
              <p>
                アカウントを削除する場合、これまでのアクティビティ（投稿したレシピ、コレクションリスト...）が全て削除されます。また、再度アカウントを作成する場合、以前ご自身で削除したアカウントを使用・復旧する事は一切できません。
              </p>
            </HeroText>
            <Container>
              <FormItem label="現在のパスワード">
                <Input ps
                  icon={<Password/>}
                />
              </FormItem>
              <FormItem>
                <Button negative>
                  <Notice/>
                  アカウントを削除
                </Button>
              </FormItem>
            </Container>
          </div>
        </Column>
      </BaseLayout>
    );
  }
}

export default withAuth(Delete);
