// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './src/App.jsx'; // Import your main React component

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
