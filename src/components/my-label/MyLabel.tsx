import './myLabel.css'

export interface MyLabelProps {
  /**
   * Capitalize the label
   */
  allCaps?: boolean
  /**
   * Color of the label
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * This is the label that will be displayed
   */
  /**
   * Custom color of the font
   */
  fontColor?: string
  label: string
  /**
   * This is size of tag
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
}

const MyLabel = ({
  allCaps = false,
  color = 'primary',
  fontColor,
  label = 'No label',
  size = 'normal'
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel