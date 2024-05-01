import { SVGProps } from "react";

export default function Lock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="#ffffff"
        d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318L2 12c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017L12 22l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616L22 12l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004zm0 4a3 3 0 0 1 2.995 2.824L15 9v1a2 2 0 0 1 1.995 1.85L17 12v3a2 2 0 0 1-1.85 1.995L15 17H9a2 2 0 0 1-1.995-1.85L7 15v-3a2 2 0 0 1 1.85-1.995L9 10V9a3 3 0 0 1 3-3m3 6H9v3h6zm-3-4a1 1 0 0 0-.993.883L11 9v1h2V9a1 1 0 0 0-1-1"
      />
    </svg>
  );
}
