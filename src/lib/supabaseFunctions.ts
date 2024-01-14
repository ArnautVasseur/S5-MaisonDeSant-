import { ref, onMounted } from 'vue'
import { supabase } from './supabaseClient'

export const pathologies = ref([])
export const soins = ref([])
export const praticiens = ref([])

//Pathologies
export async function insertpathologies(){
  const input = document.getElementById('pathoname_insert') as HTMLInputElement | null;
  const input2 = document.getElementById('pathodesc_insert') as HTMLInputElement | null;
  const successMessage = document.getElementById('successMessage');
  if (input != null && input2 != null && successMessage != null) {
  const name = input.value;
  const desc = input2.value
  const { data, error } = await supabase
  .from('pathologies')
  .insert([
      { name: name,
        desc: desc, },
  ])
      .select()
    if(error){
      console.log(error)
    }
    // Show success message
    successMessage.textContent = "Vous avez bien ajouté une nouvelle pathologie, actualisez pour voir les changements";
    successMessage.style.display = 'block';

    // Optional: Hide the success message after a certain time (e.g., 3 seconds)
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
  }
}

export async function updatepathologies(){
  const input = document.getElementById('pathoname_update') as HTMLInputElement | null;
  const input2 = document.getElementById('pathodesc_update') as HTMLInputElement | null;
  const filter_update = document.getElementById('filter_update') as HTMLInputElement | null;
  const successMessage = document.getElementById('successMessage');
  if(input != null && filter_update != null && input2 != null && successMessage != null){
    const name = input.value
    const desc = input2.value
    const filter = filter_update.value
    // Create an object to hold the fields to update
    const updateFields: { [key: string]: any } = {};
    // Include name in updateFields only if input is not empty
    if (name.trim() !== '') {
      updateFields.name = name;
    }
    // Include desc in updateFields only if input2 is not empty
    if (desc.trim() !== '') {
      updateFields.desc = desc;
    }
    const { data, error } = await supabase
      .from('pathologies')
      .update(updateFields)
      .eq('name', filter)
      .select();
    if(error){
      console.log(error)
    }
    successMessage.textContent = "Vous avez bien modifié cette pathologie, actualisez pour voir les changements";
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
  }
}

export async function deletepathologies() {
  const filter_delete = document.getElementById('filter_delete') as HTMLInputElement | null;

  if (filter_delete != null) {
    const filter = filter_delete.value;

    // Display a confirmation dialog
    const isConfirmed = window.confirm("Vous êtes sûr de vouloir supprimer cette pathologie?");

    if (!isConfirmed) {
      return;  // User canceled the operation
    }

    const { data, error } = await supabase
      .from('pathologies')
      .delete()
      .eq('name', filter);

    if (error) {
      console.log(error);
    } else {
      console.log("Vous avez supprimé: " + filter);
    }
  }
}


//Soins
export async function insertsoins() {
  const name = document.getElementById('soinsname_insert') as HTMLInputElement | null;
  const desc = document.getElementById('soinsdesc_insert') as HTMLInputElement | null;
  const imageInput = document.getElementById('soinsimage_insert') as HTMLInputElement | null;
  const successMessage = document.getElementById('successMessage');

  if (name != null && desc && imageInput && successMessage != null) {
    const result_name = name.value;
    const result_desc = desc.value;
    // Get the selected image file
    const imageFile = imageInput.files?.[0];
    if (imageFile) {
      // Upload the image to Supabase Storage
      const { data: storageData, error: storageError } = await supabase.storage
        .from('soins')
        .upload(`${imageFile.name}`, imageFile);
      if (storageError) {
        console.error(storageError);
        return;
      }
      // Construct the full image URL
      const baseUrl = 'https://qfgcsuwyabuvsliecfib.supabase.co';
      const imageUrl = `${baseUrl}/storage/v1/object/public/soins/${storageData?.path}`;
      // Add image metadata to the 'soins' table
      const { data: insertData, error: insertError } = await supabase
        .from('soins')
        .insert([
          {
            name: result_name,
            desc: result_desc,
            image_url: imageUrl,
          },
        ])
        .select();
      if (insertError) {
        console.error(insertError);
      }
    } else {
      console.error('No image selected');
    }
    // Show success message
    successMessage.textContent = "Vous avez bien ajouté un souveau soin, actualisez pour voir les changements";
    successMessage.style.display = 'block';
    // Optional: Hide the success message after a certain time (e.g., 3 seconds)
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
  }
}

export async function updatesoins() {
  const name = document.getElementById('soinsname_update') as HTMLInputElement | null;
  const desc = document.getElementById('soinsdesc_update') as HTMLInputElement | null;
  const imageInput = document.getElementById('soinsimage_update') as HTMLInputElement | null;
  const filter_update = document.getElementById('filter_update') as HTMLInputElement | null;
  const successMessage = document.getElementById('successMessage');
  if (name != null && desc && imageInput && filter_update && successMessage != null) {
    const result_name = name.value;
    const result_desc = desc.value;
    const filter = filter_update.value;
    const imageFile = imageInput.files?.[0];
    let imageUrl = '';
    if (imageFile) {
      const { data: storageData, error: storageError } = await supabase.storage
        .from('soins')
        .upload(`${imageFile.name}`, imageFile);
      if (storageError) {
        console.error(storageError);
        return;
      }
      const baseUrl = 'https://qfgcsuwyabuvsliecfib.supabase.co';
      imageUrl = `${baseUrl}/storage/v1/object/public/soins/${storageData?.path}`;
    }
    const updateFields: { [key: string]: any } = {};
    if (result_name.trim() !== '') {
      updateFields.name = result_name;
    }
    if (result_desc.trim() !== '') {
      updateFields.desc = result_desc;
    }
    if (imageUrl !== '') {
      updateFields.image_url = imageUrl;
    }
    if (Object.keys(updateFields).length > 0) {
      const { data: insertData, error: insertError } = await supabase
        .from('soins')
        .update([updateFields])
        .eq('name', filter)
        .select();

      if (insertError) {
        console.error(insertError);
      }
    }
    successMessage.textContent = "Vous avez bien ajouté un nouveau soin, actualisez pour voir les changements";
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }
}

export async function deletesoins() {
    const filter_delete = document.getElementById('filter_delete') as HTMLInputElement | null;
    const successMessage = document.getElementById('successMessage');

    if (filter_delete != null && successMessage != null) {
        const filter = filter_delete.value;

        // Display a confirmation dialog
        const isConfirmed = window.confirm("Vous êtes sûr de vouloir supprimer ce soin?");

        if (!isConfirmed) {
            return;  // User canceled the operation
        }

        // Fetch the soin data first to get the image URL
        const { data: soinData, error: soinError } = await supabase
            .from('soins')
            .select('name, image_url') // Add any other fields you need
            .eq('name', filter);

        if (soinError) {
            console.error(soinError);
            return;
        }

        const { data, error } = await supabase
            .from('soins')
            .delete()
            .eq('name', filter);

        if (error) {
            console.error(error);
        } else {
            // Delete the associated image in storage
            const imageUrl = soinData?.[0]?.image_url;
            if (imageUrl) {
                // Extract filename from the URL
                const filename = imageUrl.split('/').pop();
                
                const { error: storageError } = await supabase.storage
                    .from('soins')
                    .remove([filename]);  // Use the extracted filename

                if (storageError) {
                    console.error(storageError);
                    return;
                }
            }

            // Show success message
            successMessage.textContent = "Vous avez supprimé: " + filter +", actualisez pour voir les changements";
            successMessage.style.display = 'block';

            // Optional: Hide the success message after a certain time (e.g., 3 seconds)
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    }
}


//Praticiens
export async function insertpraticiens(){
  const input = document.getElementById('pratiname_insert') as HTMLInputElement | null;
  const input2 = document.getElementById('pratidiplo_insert') as HTMLInputElement | null;
  const successMessage = document.getElementById('successMessage');
  if (input != null && input2 != null && successMessage != null) {
    
  const name = input.value;
  const diplome = input2.value
  const { data, error } = await supabase
  .from('pathologies')
  .insert([
      { name: name,
        diplomes: diplome, },
  ])
      .select()
    if(error){
      console.log(error)
    }
    // Show success message
    successMessage.textContent = "Vous avez bien ajouté un nouveau praticien, actualisez pour voir les changements";
    successMessage.style.display = 'block';

    // Optional: Hide the success message after a certain time (e.g., 3 seconds)
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
  }
  
}