export type UiBtnProps = {
  icon?: string
  disabled?: boolean
  filling?: boolean
  bordered?: boolean
  btnColor?: string
}
export type UiAlertProps = {
  color?: string
}
export type UiIconProps = {
  icon: string
  iconTextColor?: string
  isAbsolute?: boolean
}
export type UiSelectProps = {
  label: string
  value: any
}
export type UiInputProps = {
  type?: 'text' | 'password'
  icon?: string
  required?: boolean
  placeholder?: string
  error?: string | null
  disabled?: boolean
  maxlength?: number
}

export type Account = {
  mark: Mark[];
  recordType: string;
  login: string;
  password: string | null;
}

type Mark = {
  text: string;
}

export type Validation = {
  message: string | null
  isValid: boolean
}
