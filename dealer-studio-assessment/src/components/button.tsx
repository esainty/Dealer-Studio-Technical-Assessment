import { sva } from '../../styled-system/css'

export default function Button(props: { text: string, onClick?: () => void }) {
    const styles = sva({
        slots: ["button", "text"],
        base: {
            button: {
                padding: "8px 16px",
                borderRadius: "4px",
                backgroundColor: "blue.500",
                color: "white",
                "&:hover": {
                    backgroundColor: "blue.600",
                },
            },
            text: {
                fontSize: "16px",
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
