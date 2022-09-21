import { ArrowPathIcon } from "@heroicons/react/24/outline";

const LoadingIndicator = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-5 w-5 text-white">
                <ArrowPathIcon />
            </div>
        </div>
    );
};

export default LoadingIndicator;