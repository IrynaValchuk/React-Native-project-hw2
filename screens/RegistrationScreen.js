import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { gStyles } from "../styles/global.styles";

export const RegistrationScreen = () => {
  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={require("../assets/images/bgImage.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.formContainer}>
          <View style={styles.addImageBox}>
            <TouchableOpacity style={styles.addImageBtn}>
              <Image source={require("../assets/images/addImageBtn.png")} />
            </TouchableOpacity>
          </View>
          <Text style={gStyles.title}>Реєстрація</Text>
          <View style={styles.inputWrap}>
            <Input placeholder="Логін" />
            <Input placeholder="Адреса електронної пошти" />
            <View>
              <Input placeholder="Пароль" secureTextEntry={true} />
              <TouchableOpacity style={styles.showPasswordBox}>
                <Text style={styles.text}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SubmitButton text="Зареєстуватися" />
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
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
    height: 549,
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 78,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  addImageBox: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addImageBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
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
