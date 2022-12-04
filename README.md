# Setup

common-styles package is not published to npm. For any apps (angular-app inside monorepo) to work that includes it, run `npm link` inside common-styles folder, then `npm link common-styles` inside the root of the project using it.
