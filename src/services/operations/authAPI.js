
import { setLoading,setToken } from "../../slices/authSlice";
import { apiConnector } from "../apiconnector";
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"

import { endpoints } from "../apis"
import { toast } from "react-hot-toast"








const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export const sendOtp = async (email, dispatch, navigate) => {
  const toastId = toast.loading('Loading...');
  dispatch(setLoading(true))

  try {
    await apiConnector('POST', SENDOTP_API, {
      email
    });
    toast.success('OTP sent successfully');
    navigate('/verify-email')
  } catch (error) {
    toast.error(error?.response?.data?.error || 'SignUp Failed')
  }
  toast.dismiss(toastId);
  dispatch(setLoading(false));
}

export const signUp = async (signUpData, dispatch, navigate) => {
  dispatch(setLoading(true));
  const toastId = toast.loading('Loading ...')
    try {
      const response = await apiConnector("POST", SIGNUP_API, signUpData)

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }


export const login = async (email, password, dispatch, navigate) => {
  dispatch(setLoading(true));
  const toastId = toast.loading('Loading ...')

    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })
     

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({ ...response.data.user, image: userImage }))
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify({...response.data.user,image: userImage}))
      navigate("/")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }

  export const forgotPassword = async (email, setEmailSent, dispatch, navigate) => {
    dispatch(setLoading(true));
    const toastId = toast.loading('Loading ...')
  
    try {
      await apiConnector('POST', RESETPASSTOKEN_API, {
        email
      });
  
      toast.success('Reset Email Sent');
      setEmailSent(true)
    } catch (error) {
      // toast.error('Login Failed');
      toast.error(error?.response?.data?.error || 'Forgot Password Failed')
    }
  
    toast.dismiss(toastId)
    dispatch(setLoading(false));
  }
  export const resetPassword = async (token, password, confirmPassword,dispatch, navigate) => {
    dispatch(setLoading(true));
    const toastId = toast.loading('Loading ...')
  
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {password, confirmPassword, token});

      console.log("RESET Password RESPONSE ... ", response);
     

      if(!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password has been reset successfully");
    } catch (error) {
      // toast.error('Login Failed');
      toast.error(error?.response?.data?.error || 'Reset Password Failed')
    }
  
    toast.dismiss(toastId)
    dispatch(setLoading(false));
  }
  export const logout = async (navigate,dispatch) => {
    
      dispatch(setToken(null))
      dispatch(setUser(null))
      dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    
  }
 