import { useState } from "react";
import { sva } from "../../styled-system/css"
import Button from "./Button"

export default function Card(props: { title: string, description: string, actionString: string, startWithBorder?: boolean }) {
    const styles = sva({
        slots: ["container", "image", "content", "title", "description", "button"],
        base: {
            container: {
                display: "flex",
                flexDirection: "column",
                // margin: "16px",
                borderRadius: "10px",
                shadow: "lg",
                backgroundColor: "white",
                maxWidth: "400px",
                gap: "16px",
                overflow: "hidden",
                height: "min-content"
            },
            image: {
                width: "100%",
                height: "auto",
            },
            content: {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "32px",
                justifyContent: "space-evenly",
            },
            title: {
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "16px",
            },
            description: {
                fontSize: "14px",
                color: "gray.700",
                textAlign: "center",
                flexGrow: 1,
                whiteSpace: "pre-wrap"
            },
            button: {
                margin: "32px"
            }
        },
        variants: {
            border: {
                true: {
                    container: {
                        outlineWidth: "4px",
                        outlineStyle: "solid",
                        outlineColor: "sky.600",
                        transition: "outline 0.5s ease-out",
                    }

                },
                false: {
                    container: {
                        outlineWidth: "4px",
                        outlineColor: "transparent",
                        outlineStyle: "solid",
                        transition: "outline 0.5s ease-out",
                    }
                }
            }

        }
    })

    const [shouldDisplayBorder, setShouldDisplayBorder] = useState<boolean>(props.startWithBorder ?? false);

    return (
        <div className={styles({ border: shouldDisplayBorder }).container}>
            <img className={styles().image} src="./src/assets/images/skyline.jpg" />
            <div className={styles().content}>
                <h2 className={styles().title}>{props.title}</h2>
                <p className={styles().description}>
                    {props.description}
                </p>
                <Button text={props.actionString} buttonClassName={styles().button} onClick={() => setShouldDisplayBorder(!shouldDisplayBorder)} />
            </div>
        </div>
    )
}