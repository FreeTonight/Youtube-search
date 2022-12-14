type Props = {
    title: string;
    message: string;
};

const Message = ({ title, message }: Props) => {
    return (
        <div className="flex flex-col text-white text-sm justify-center items-center select-none">
            <img src="/Youtube-search/images/error.png" 
                alt="Error" className="mb-[10px]" />
            <h1 className="text-lg">{title}</h1>
            <p>{message}</p>
        </div>
    );
};

export default Message;