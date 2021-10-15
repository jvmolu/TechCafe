function navBarButton(props){
    if(props.full === "True"){
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                {props.name}
            </a>
            
        )
    }
    else{
        
        return(
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
                {props.name}
            </a>
        )
    }
    
}


export default navBarButton;