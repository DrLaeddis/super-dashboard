import HeadComponent from "../component/head";

export default function Login() {
    return (
    <>
        <HeadComponent />
        <div className="container fix-height">
            <main className="content bgBackground-2">
                <div className="authPage">
                    <p>Log In to Dashboard</p>
                    <form className="authPage" action="/adminPage/dashboard/">
                        <label className="labelAuth" htmlFor="">Email</label>
                        <input className="authInput" type="email" name="" id="" placeholder="Email" />

                        <label className="labelAuth" htmlFor="">Password</label>
                        <input className="authInput" type="password" name="" id="" placeholder="Password" />

                        <button className="btnAuth">Login</button>
                    </form>
                </div>
            </main>
        </div>
    </>
    )
}