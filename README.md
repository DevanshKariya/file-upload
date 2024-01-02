Detailed documentation:

### Middleware

#### `upload.js`
This middleware handles file uploads using Multer, providing settings for file storage and naming conventions. It utilizes `util.promisify` to convert the multer middleware into a promise-based function.

- **Multer Configuration:**
  - Uses `diskStorage` to set up the destination and filename for uploaded files.
- **Middleware Setup:**
  - Configures multer with the specified storage settings.
- **Middleware Export:**
  - Exports the promisified multer middleware for use in handling file uploads.

### Controllers

#### `fileUploadController.js`

##### `upload(req, res)`
Handles file upload operations.
- **Functionality:**
  - Calls the `uploadFile` middleware.
  - Validates if a file was uploaded successfully.
  - Sends appropriate responses based on upload success or failure.

##### `getFiles(req, res)`
Retrieves a list of available files.
- **Functionality:**
  - Reads the `/uploads` directory using `fs.readdir`.
  - Constructs an array of file information (name and URL).
  - Sends the file information as a response.

##### `download(req, res)`
Enables file downloads.
- **Functionality:**
  - Retrieves the filename from the request parameter.
  - Initiates file download using `res.download` with the file path.
  - Sends an error response if the download encounters an issue.

##### `deleteFile(req, res)`
Handles file deletion.
- **Functionality:**
  - Obtains the filename from the request parameter.
  - Uses `fs.unlink` to delete the specified file.
  - Sends a success or error response based on the deletion result.

### Routes

#### `uploadRoutes.js`
Defines routes and links them to the respective controller functions.

- **POST `/fileUpload`:**
  - Links to the `upload` function in `fileUploadController` for handling file uploads.
- **GET `/getFiles`:**
  - Associates with the `getFiles` function in `fileUploadController` to retrieve file information.
- **GET `/files/:name`:**
  - Routes to the `download` function in `fileUploadController` for downloading specific files.
- **DELETE `/files/:name`:**
  - Connects to the `deleteFile` function in `fileUploadController` to delete specific files.

### Views

#### `upload.ejs`
This EJS file provides a user interface for file upload and displaying downloadable files.

- **File Upload Form:**
  - Displays an upload form allowing users to select and submit files.
- **Downloadable Files Section:**
  - Renders a list of available files with delete buttons for each file.
- **JavaScript Section:**
  - Handles file deletion asynchronously via `fetch` requests.
  - Retrieves and displays the list of downloadable files.

Each function and component serves specific purposes within the application, orchestrating file uploads, downloads, deletions, and UI interactions. Understanding their roles and interactions is crucial for efficient development, maintenance, and troubleshooting. Adjustments or enhancements can be made based on specific project requirements and best practices.
