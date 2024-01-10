import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from './../../assests/FirstStephub.png'
import { ToastContainer, toast } from 'react-toastify';
import login1 from './../../assests/13.jpg'
import secureLocalStorage from "react-secure-storage";
import { LOGIN_URL } from "./../Constant/Constant";
import { Audio } from 'react-loader-spinner'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false);
    const [wait, setWait] = useState(false)
    const [visible, setVisible] = useState(false)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handlesubmit = () => {
        if (!validateEmail(email)) {
            toast('Please Enter Valid Email');
            setWait(false);
            return;
        }
        const data = { "email": email, "password": password }
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: LOGIN_URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        if (email !== "" && password !== "") {
            axios.request(config)
                .then((response) => {
                    const result = response?.data;
                    console.log("result at login", result);
                    secureLocalStorage.setItem('token', result.token)
                    secureLocalStorage.setItem('email', result.email)
                    secureLocalStorage.setItem('name', result.name)
                    secureLocalStorage.setItem('id', result.id)
                    secureLocalStorage.setItem('role', result.role)
                    if (result?.profilePic != null) {
                        secureLocalStorage.setItem('profilePic', result?.profilePic);
                    }
                    secureLocalStorage.setItem('active', result.active)
                    if (rememberMe) {
                        secureLocalStorage.setItem('password', password);
                        localStorage.setItem('remember', "true");
                    } else {
                        secureLocalStorage.removeItem('password');
                        localStorage.setItem('remember', "false");
                    }
                    setemail("")
                    setpassword("")
                    setWait(false)
                    navigate('/');
                }
                )
                .catch((error) => {
                    toast(error.response.data.message)
                    setWait(false);
                    return;
                });
        } else {
            toast("Please enter both your email and password.");
            setWait(false);
            return;
        }
    }
    // const checkTokenValidity = async () => {
    //     try {
    //         const token = await secureLocalStorage.getItem('token'); // Replace with your actual token key
    //         if (token) {
    //             const decodedToken = jwtDecode(token);
    //             const currentTime = Date.now() / 1000; // Convert milliseconds to seconds

    //             if (decodedToken.exp < currentTime) {
    //                 // Token has expired
    //                 navigate('/login'); // Assuming you want to redirect to the login page
    //             } else {
    //                 // Token is valid, navigate to dashboard
    //                 navigate('/');
    //             }
    //         }
    //     } catch (error) {
    //         // Handle any errors that might occur during token retrieval
    //         console.error("Error while checking token validity:", error);
    //     }
    // };
    // useEffect(() => {
    //     checkTokenValidity();
    // }, [navigate]);

    useEffect(() => {
        if (wait === true) {
            handlesubmit();
            setTimeout(() => {
                setWait(false);
            }, 10000);
        }
    }, [wait])

    useEffect(() => {
        const remember = localStorage.getItem('remember');
        if (remember === "true") {
            setRememberMe(true);
            const password12 = secureLocalStorage.getItem('password');
            password12 === null ? setpassword("") : setpassword(password12);
            const email1 = secureLocalStorage.getItem('email');
            email1 === null ? setemail("") : setemail(email1);
        }
    }, [])

    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block m-24">
                    <img src={login1} alt="student" className="sm:h-4/5"></img>
                </div>
                <div className="flex flex-col p-5 bg-white rounded-lg shadow">
                    <div className="text-[#3F4547] text-3xl font-bold ml-5" >
                        <img src={logo} alt="logo" className="h-24 w-24" ></img>
                    </div>
                    <div className="text-[#000000] text-3xl mt-5 ml-4" style={{ fontWeight: "700" }}> <h1>Account Login</h1>  </div>
                    <p className="text-[#8692A6] ml-4 mt-1 p-1 h-18">  If you have already registered, you can login with your username and password.</p>
                    <div className="font-semibold mb-3 ml-4 p-1">  Hello! Lets get started.. </div>
                    <label className="ml-5 mt-1">Email</label>
                    <div className="text-center justify-center mr-4">
                        <input type="email" placeholder="Enter Email"
                            className="mt-1 outline-0 h-10 border border-[#1565D8] pl-4 ml-4 mr-4 rounded-lg text-[#494949] w-full"
                            value={email} onChange={(e) => { setemail(e.target.value); }}
                        />
                    </div>
                    <label className="mt-2 ml-5 text-[#494949]">Password</label>
                    {visible && <div className="flex flex-row border border-[#1565D8] ml-4 rounded-lg h-10" >
                        <input type="text" placeholder="Enter Your Password"
                            className="mr-5 outline-0  pl-4 w-full rounded-lg border-[#1565D8]" value={password} onChange={(e) => {
                                setpassword(e.target.value);
                            }} />
                        <VisibilityIcon sx={{ cursor: "pointer", marginLeft: "20px", marginRight: "10px", marginTop: "6px" }} onClick={() => { setVisible(false) }} />
                    </div>
                    }
                    {!visible && <div className="flex flex-row border border-[#1565D8] rounded-lg ml-4 h-10">
                        <input type="password" placeholder="Enter Your Password"
                            className="mr-5 outline-0   pl-4 w-full rounded-lg border-[#1565D8]" value={password}
                            onChange={(e) => { setpassword(e.target.value); }} />
                        <VisibilityOffIcon sx={{ cursor: "pointer", marginLeft: "20px", marginRight: "10px", marginTop: "6px" }} onClick={() => { setVisible(true) }} />
                    </div>}
                    <div className="grid grid-cols-2 mt-6">
                        <div className="flex flex-row ml-5">
                            <input type="checkbox" checked={rememberMe} onChange={(e) => { setRememberMe(e.target.checked); }} />
                            <div className="text-[#3F4547]">Remember Me</div>
                        </div>
                        <Link to='/forget_password'><div className="text-[#2C73EB] text-right cursor-pointer mr-5">Forgot Password?</div></Link>
                    </div>

                    {!wait && <div className="text-center justify-center mr-5">
                        <button className="text-[white] bg-[#2C73EB] h-10 text rounded-md mt-3 ml-4 font-bold cursor-pointer w-full" onClick={() => { setWait(true) }} onKeyDown={(e) => {
                            if (e.keyCode === 13) { setWait(true) }
                        }}>  Log In </button>  </div>}

                    {wait && <div className="flex text-center justify-center"><Audio height="40" width="120" color='lightblue' ariaLabel='three-dots-loading'
                    /></div>}

                    <div className=" flex flex-row mt-5 ml-5">
                        <div className="text-[#3F4547]">Don't have an account?</div>
                        <Link to='/signup'> <div className="text-[#2C73EB] underline cursor-pointer"> Sign up here </div> </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

