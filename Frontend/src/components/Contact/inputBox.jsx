function inputBox(props){
    return (
        <div className = "mt-8">
            <span className="uppercase text-sm text-yellow-100 font-bold">{props.title}</span>
            <input className="w-full bg-yellow-50  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text"/>
        </div>
    );
}

export default inputBox;