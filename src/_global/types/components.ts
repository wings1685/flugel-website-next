export type DivAttributes = React.HTMLAttributes<HTMLDivElement>;
export type AsDiv = Exclude<DivAttributes, 'align'> & {
	as?: 'div';
};
export type SectionAttributes = DivAttributes;
export type AsSection = SectionAttributes & {
	as: 'section';
};

export type LinkAttributes = React.HTMLAttributes<HTMLAnchorElement>;
export type AsLink = LinkAttributes & {
	as: 'a';
};

export type ButtonAttributes = React.HTMLAttributes<HTMLButtonElement>;

export type HAttributes = React.HTMLAttributes<HTMLHeadingElement>;

export type ParagraphAttributes = React.HTMLAttributes<HTMLParagraphElement>;

export type UListAttributes = React.HTMLAttributes<HTMLUListElement>;

export type Sizes = 'small' | 'medium' | 'large' | 'extrasmall' | 'extralarge' | 'none';
export type Directions = 'left' | 'center' | 'right' | 'justify';
