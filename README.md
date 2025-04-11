# ZenithMates Real Estate App

A modern React Native application for real estate property listings and management.

## Features

- Property listings with image carousels
- Property details including amenities
- Like/favorite properties
- Share properties
- Rating system
- Featured property tags

## Project Structure

```
src/
  ├── components/       # Reusable UI components
  ├── screens/         # Screen components
  ├── constants/       # App-wide constants
  ├── types/          # TypeScript type definitions
  ├── utils/          # Utility functions
  ├── hooks/          # Custom React hooks
  └── assets/         # Static assets (images, fonts)
```

## Setup Instructions

1. Install dependencies:
   ```bash
   yarn install
   ```

2. iOS specific setup:
   ```bash
   cd ios
   pod install
   cd ..
   ```

3. Start the Metro bundler:
   ```bash
   yarn start
   ```

4. Run the app:
   ```bash
   # For iOS
   yarn ios

   # For Android
   yarn android
   ```

## Best Practices

1. **TypeScript**
   - Use TypeScript for type safety
   - Define interfaces for component props
   - Use type inference where possible

2. **Component Structure**
   - Use functional components with hooks
   - Keep components focused and single-responsibility
   - Extract reusable logic into custom hooks

3. **Styling**
   - Use StyleSheet.create for styles
   - Keep styles colocated with components
   - Use constants for colors and dimensions
   - Use responsive dimensions (wp/hp)

4. **State Management**
   - Use React hooks for local state
   - Consider Redux/Context for global state
   - Keep state minimal and normalized

5. **Performance**
   - Memoize callbacks with useCallback
   - Memoize expensive computations with useMemo
   - Use PureComponent or React.memo for optimization
   - Implement proper list rendering optimization

6. **Code Organization**
   - Follow consistent naming conventions
   - Group related code in feature folders
   - Keep files focused and maintainable
   - Document complex logic with comments

## Dependencies

- react-native: 0.72.x
- react-native-vector-icons
- react-native-responsive-screen
- typescript: 4.x
- Other dependencies as needed

## Contributing

1. Follow the established code style
2. Write meaningful commit messages
3. Document significant changes
4. Test thoroughly before submitting PRs

## License

MIT License - see LICENSE file for details
