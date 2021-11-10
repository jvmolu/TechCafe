function meassageBox(props){
    return (
        <div className="mt-8">
            <span className="uppercase text-sm text-yellow-100 font-bold">{props.title}</span>
            <textarea
            className="w-full h-32 bg-yellow-50 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
    );
}

export default meassageBox;