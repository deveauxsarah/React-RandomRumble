import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { hitBack, hitMonster } from '../features/fight/fightSlice';



const ButtonCapacity = (props) => {
    const dispatch = useDispatch();
    const combat = () => {
        dispatch(hitMonster( props.player.pv > 0 ? 5 : 0));
        console.log('AaaaaiiieeeEE !')
        dispatch(hitBack({
            id: props.player.id , pv: 2
        }));
        // console.log('ok !')

    }
        return (
            <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                hit
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> - 5
    </button>
        )

}



export default ButtonCapacity;
