---
sidebar_label: Tips From The Team
---

# Tips From The Team

Thank you for trying QuickEase 2.0! Here are a few tips from us to help you manage or maintain the project.

- To stay up to date with the latest changes from the original repository (maintained by the developer), make sure to regularly sync your forked repo. You can do this by running either of the following commands in the `server/` terminal:

  ```bash
  git fetch upstream
  git merge upstream/main
  ```

  or simply

  ```bash
  git pull upstream main
  ```

  > While both commands achieve the same result, the first approach (fetch + merge) gives you more control and is generally the safer method when working with active or collaborative branches.

- Whenever there are updates in the `server/` especially in the prisma client, always run the `npx prisma db push` to push database migration updates.

- For complete and detailed documentation of both the client and server, feel free to visit the [official QuickEase 2.0 GitHub repository](https://github.com/dlord213/quickease-2.0.git) and check the `README.md` files inside each directory.
