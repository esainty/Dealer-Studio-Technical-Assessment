import { sva } from '../../styled-system/css'

export default function Button(props: { text: string, onClick?: () => void }) {
    const styles = sva({
        slots: ["button", "text"],
        base: {
            button: {
                padding: "6px 16px",
                minWidth: "160px",
                borderRadius: "999px",
                backgroundColor: "sky.600",
                color: "white",
                "&:hover": {
                    backgroundColor: "sky.700",
                },
            },
            text: {
                fontSize: "14px",
                fontWeight: "bold",
            },
        },
    });

    return (
        <button className={styles().button} onClick={props.onClick}>
            <label className={styles().text}>{props.text}</label>
        </button>
    );
}
