const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video
tinymce.init({
    selector: 'textarea', // Replace 'textarea' with the selector for the element(s) where you want to initialize TinyMCE
    apiKey: 'g5nejpq1vm1ac26wdgk2477lpy61hglqff7y2zmyh1jq7k56', // Replace 'YOUR_API_KEY' with your actual API key
    // Other TinyMCE configuration options...
});

export default conf