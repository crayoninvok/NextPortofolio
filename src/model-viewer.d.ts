// model-viewer.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLProps<HTMLElement> & {
        src: string;
        alt: string;
        "auto-rotate"?: boolean;
        "camera-controls"?: boolean;
        ar?: boolean;
        "ar-modes"?: string;
      },
      HTMLElement
    >;
  }
}
