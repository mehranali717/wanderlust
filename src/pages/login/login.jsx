import { useForm } from "react-hook-form"
import { Button, Input } from "../../components"
import styles from "./login.module.css"
const Login = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit=(data)=>{
        console.log({data});
    }
    return <>
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formHeader}>
                    <h3>
                        Login Form
                    </h3>
                </div>
                <div className={styles.formBoday}>
                    <Input type="email" placeholder="Email" label="Email*" {...register("Email")} />
                    <Input type="password" placeholder="Password" label="Password*" {...register("password", { required: true })} />
                </div>
                <div className={styles.formFooter}>
                    <Button type="submit" text="Login" />
                </div>
            </form>
        </div>
    </>
}
export default Login