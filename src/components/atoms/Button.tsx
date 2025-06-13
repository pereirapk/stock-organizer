type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
  }
  export const Button = ({ children, onClick }: ButtonProps) => (
    <button type="submit" className="px-4 py-2 bg-indigo-700 text-white rounded" onClick={onClick}>
      {children}
    </button>
  )