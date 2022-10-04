﻿export type FontStyleType = 'normal' | 'italic';
export type FontWeightType = '100' | '200' | '300' | 'normal' | '400' | '500' | '600' | 'bold' | '700' | '800' | '900';

export interface ParsedFont {
	fontStyle?: FontStyleType;
	fontVariant?: string;
	fontWeight?: FontWeightType;
	lineHeight?: string;
	fontSize?: string;
	fontFamily?: string;
}
