import { useNavigate } from "react-router-dom";

type Props = {
    className?: string;
};

const Logo = ({ className }: Props) => {
    // const imagePath = process.env.PUBLIC_URL + "/images";
    const navigate = useNavigate();

    return (
        <img
            src={"Youtube-search/images/youtube.webp"}
            alt="Logo"
            className={`w-16 cursor-pointer ${className}`}
            onClick={() => {
                navigate("/");
            }}
        />
    );
};

export default Logo;