import './styles/play-animation.css';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const TADUM_SOUND_URL = '/sounds/tadum.mp3';

const PlayAnimation = () => {
	let history = useHistory();
	const soundRef = useRef(null);
	const handleTadum = () => {
		soundRef.current.currentTime = 0;
		soundRef.current.play();
	};

	useEffect(() => {
		handleTadum();
		setTimeout(() => {
			history.push('/browse');
		}, 4200);
	}, [history]);

	return (
		<div className="PlayAnimation__wrp">
			<audio ref={soundRef} src={TADUM_SOUND_URL} />
			<span className="PlayAnimation__text">NETFLIX</span>
		</div>
	);
};

export default PlayAnimation;
