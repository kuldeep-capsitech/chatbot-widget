import { h } from 'preact';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      span: any;
      button: any;
      input: any;
      img: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      p: any;
      section: any;
      svg: any;
      path: any;
      g: any;
      defs: any;
      filter: any;
      feFlood: any;
      feColorMatrix: any;
      feOffset: any;
      feGaussianBlur: any;
      feComposite: any;
      feBlend: any;
      linearGradient: any;
      stop: any;
      ellipse: any;
    }
  }
}

// Asset type declarations
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.ico' {
  const content: string;
  export default content;
}