const Button = ({ label, onClick, type = 'button', style = '', children }) => {
    return (
        <button
            className={`flex items-center px-6 py-2 bg-gray-200 border-2 border-black rounded-full text-black transition duration-300 ease-in-out hover:bg-black hover:text-white transform hover:scale-105 active:scale-95 ${style}`}
            onClick={onClick}
            type={type}
        >
            {label}
            {children && <span className="ml-2">{children}</span>}
        </button>
    );
};

export default Button;
