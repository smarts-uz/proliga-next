
import { useCookies } from "next-client-cookies";

const useCookie = () => {
  const cookies = useCookies();

  const getCookie = (key) => cookies.get(key);

  const setCookie = (key, value) =>
    cookies.set(key, value, {
      expires: 2,
      sameSite: "None",
      secure: true,
    });

  const removeCookie = (key) => cookies.remove(key);

  return { setCookie, getCookie, removeCookie };
};

export default useCookie;