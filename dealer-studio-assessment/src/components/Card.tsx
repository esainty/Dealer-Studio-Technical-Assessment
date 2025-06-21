import { sva } from "../../styled-system/css"

export default function Card(props: { title: string, description: string }) {
    const styles = sva({
        slots: ["container", "image", "title", "description"],
        base: {
            container: {
                display: "flex",
                flexDirection: "column",
                margin: "16px",
                borderRadius: "10px",
                shadow: "lg",
                backgroundColor: "white",
            },
            image: {
                width: "100%",
                height: "auto",
                borderRadius: "8px",
            },
            title: {
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "8px",
            },
            description: {
                fontSize: "14px",
                color: "gray.700",
                textAlign: "center",
            },
        },
    })
    return (
        <div className={styles().container}>
            <img className={styles().image} src="./src/assets/images/skyline.jpg" />
            <h2 className={styles().title}>{props.title}</h2>
            <label className={styles().description}>
                {props.description}
            </label>
        </div>
    )
}