# JRUI CLI

JRUI CLI is a command-line interface (CLI) tool designed to simplify the installation process of files and dependencies for custom JRUI components. For more information, visit the [JRUI documentation](https://jrui.org/docs).

## Installation

To install JRUI CLI, use npm:

```bash
npm install jrui-cli
```

## How to Use

After installing the CLI, you can run:

```bash
jrui help
```

This command will display a full list of available commands and optional flags.

Each component or section supporting the use of the CLI provides installation instructions.

For instance, navigating to a specific page in the documentation, such as the Reveal component, reveals an "Easy CLI Install" command:

```bash
jrui add reveal
```

Executing this command installs the Reveal component along with all its necessary dependencies, making it ready for use.

Some components offer multiple types tailored for specific templates.

For instance, the User Avatar component offers Default and Next/OAuth/Firebase types, selectable via buttons on the documentation page. This selection affects the displayed information, notably the "Easy CLI Install" command.

For Default type:

```bash
jrui add userAvatar
```

For Next/OAuth/Firebase type:

```bash
jrui add userAvatarNextOAuthFirebase
```

Executing these commands installs the corresponding files and dependencies for the desired component type.
