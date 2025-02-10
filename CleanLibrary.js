async function deleteAllArticles() {
  let totalDeleted = 0;

  while (true) {
    const deleteButtons = Array.from(document.querySelectorAll('a.gs_or_del.gs_or_btn'));

    if (deleteButtons.length === 0) {
      console.log(`No more articles to delete. Total deleted: ${totalDeleted}`);
      break;
    }

    for (let button of deleteButtons) {
      button.click();  // Click the delete button
      await new Promise(r => setTimeout(r, 100));  // Shorter delay to reduce lag
      
      const confirmButton = document.querySelector('button[name="ok"]');
      if (confirmButton) confirmButton.click();  // Confirm deletion without waiting
      totalDeleted++;
    }

    console.log(`Batch deleted. Total so far: ${totalDeleted}`);
    
    // Ensure new batch is loaded or simulate scroll if necessary
    await new Promise(r => setTimeout(r, 1000));  
  }
}

deleteAllArticles();
