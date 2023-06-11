import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { gStyles } from "../styles/global.styles";

export const LoginScreen = () => {
  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={require("../assets/images/bgImage.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.formContainer}>
          <Text style={gStyles.title}>Увійти</Text>
          <View style={styles.inputWrap}>
            <Input placeholder="Адреса електронної пошти" />
            <View>
              <Input placeholder="Пароль" secureTextEntry={true} />
              <TouchableOpacity style={styles.showPasswordBox}>
                <Text style={styles.text}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SubmitButton text="Увійти" />
          <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "relative",
    height: 489, //змінила
    alignItems: "center",
    paddingTop: 32, //змінила
    paddingBottom: 144, //змінила
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inputWrap: {
    gap: 16,
    width: "100%",
    marginBottom: 43,
  },
  showPasswordBox: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
