import { ThemeContainer } from './theme'

export function AppProvider({ children }: WithChildren) {
  return <ThemeContainer>{children}</ThemeContainer>
}
