import { useState } from "react";
import { sva } from "../../styled-system/css"
import Button from "./Button"

export default function Card(props: { title: string, description: string, actionString: string, startWithBorder?: boolean }) {
    const styles = sva({
        slots: ["container", "image", "title", "description", "button"],
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
            button: {
                margin: "16px 32px"
            }
        },
        variants: {
            border: {
                true: {
                    container: {
                        border: "2px solid",
                        borderColor: "sky.600",
                    }

                },
                false: {
                    container: {
                        border: "false"
                    }
                }
            }

        }
    })

    const [shouldDisplayBorder, setShouldDisplayBorder] = useState<boolean>(props.startWithBorder ?? false);

    return (
        <div className={styles({ border: shouldDisplayBorder }).container}>
            <img className={styles().image} src="./src/assets/images/skyline.jpg" />
            <h2 className={styles().title}>{props.title}</h2>
            <label className={styles().description}>
                {props.description}
            </label>
            <Button text={props.actionString} buttonClassName={styles().button} onClick={() => setShouldDisplayBorder(!shouldDisplayBorder)} />
        </div>
    )
}