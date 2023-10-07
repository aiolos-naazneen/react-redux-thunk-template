import { Affix, Button } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const Theme = {
	colors: {
		white: '#fff',
		text: 'rgba(0, 33, 65, 1)',
		text2: 'rgba(0, 33, 65, 0.5)',
		text3: 'rgba(0, 33, 65, 0.1)',
		text4: '#475467',
		bg: 'rgb(230, 140, 37, 1)',
		bgButton: '#E66825',
		tableHead: '#F3F6F9',
		bgButton2: 'rgba(230, 104, 37, 0.05)',
		border: 'rgba(255,255,255,0.35)',
		border2: 'rgba(6, 36, 66, 0.15)',
		cardColor1: '#FFBD5D',
		cardColor2: '#FA757D',
		cardColor3: '#88C855',
		cardColor4: '#FB6151',
		cardColor5: '#2DB3D6',
		cardColor6: '#FCCD5D',
		cardColor7: '#02509D',
	},
	media: { mobile: '768px', tab: '998px' },
};

export const GlobalStyle = createGlobalStyle`
	background-color: ${Theme.colors.bg};
`;
