function Hello(){
    let myname = "pratik";
    let fullname = () =>{
        return 'pratik patil';
    }
    return <h3>
        hello this is {myname}
        hello this is {fullname()}
    </h3>
}
export default Hello;
