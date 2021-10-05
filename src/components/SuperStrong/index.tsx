import TypeIt from "typeit-react";

export default function SuperStrong({children}) {
    return (
        <TypeIt getBeforeInit={(instance) => {
            instance.type("Crio coisas na internet </br> com React")
            .pause(1500)
            .delete(5)
            .pause(2000)
            .type("Typescript")
            .pause(1500)
            .delete(10)
            .pause(2000)
            .type("Javascript")
            .pause(1500)
            .delete(10)
            .pause(2000)
            .type("React-Native")
            .pause(1500)
            .delete(12)
            .pause(2000)
            .type("Node")
            .pause(1500)
            .delete(4)
            .pause(2000)
            .type("Angular e mto mais :)")
            .pause(1500)
            
        
            return instance;
        }}>


          </TypeIt>
    )
}