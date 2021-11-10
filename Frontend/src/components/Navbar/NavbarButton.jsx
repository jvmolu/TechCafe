function NavBarButton(props){
    if(props.full === "True"){
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
            href="#"
            className="text-yellow-400 hover:bg-red-600 hover:text-yellow-300 px-12 py-2 rounded-md text-sm font-medium"
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
                className="hover:bg-red-600 text-yellow-400 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
            >
                {props.name}
            </a>
        )
    }
    
}

export default NavBarButton;