import { IonIcon, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import './StyledInput.css'

interface inputProps{    
    disabled?: boolean;
    value?: string;
    iconStart?: string;    
    placeholder?: string;
}

const StyledInput: React.FC<inputProps> = (props: inputProps) => {
    return  <IonItem class="item" shape='round' fill='outline'>                             
                {props.iconStart? <IonIcon slot='start' icon={props.iconStart} /> : ""}
                <IonInput type="password" disabled={props.disabled} value={props.value} placeholder={props.placeholder}/>        
            </IonItem>
    }

export default StyledInput;