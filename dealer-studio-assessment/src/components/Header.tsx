import { sva } from "../../styled-system/css"
import Button from "./Button";

export default function Header() {
    const styles = sva({
        slots: ["container", "bgimage", "title", "subtitle"],
        base: {
            container: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: ["32px", "16px"],
                margin: "32px",
                overflow: "auto",
            },
            bgimage: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: -1,
                filter: "brightness(0.5)",
            },
            title: {
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
            },
            subtitle: {
                fontSize: "14px",
                fontStyle: "sans-serif",
                color: "white",
                maxWidth: "600px",
                textAlign: "center",
                margin: "16px 0px 32px 0px",
            },
        },
    });


    return (
        <div className={styles().container}>
            <img className={styles().bgimage} src="./src/assets/images/truck.jpg" />
            <h1 className={styles().title}>Welcome to G Automotive</h1>
            <label className={styles().subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec nunc et dui scelerisque tristique. Nunc condimentum nisi at dolor sagittis tincidunt. Praesent viverra orci quam, at porttitor massa vestibulum vitae. Aenean posuere viverra finibus. Vestibulum vel scelerisque nunc. Proin elementum risus non ante consequat viverra. Duis commodo neque vel fringilla lacinia. Donec elementum, quam ac laoreet mattis, sem sem bibendum diam, in tempor risus sapien ut quam.
            </label>
            <Button text="Contact Us" onClick={() => alert("Button Clicked!")} />
        </div>
    )
}