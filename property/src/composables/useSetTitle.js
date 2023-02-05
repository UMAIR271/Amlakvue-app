import { onMounted } from "vue";

const useSetTitle = (content) => {
  onMounted(() => {
    let tag = document.querySelector(`head title`);
    // check if script already exists
    if (!tag){
      tag = document.createElement("title");
      document.head.append(tag)
    }

    if (content){
      tag.innerText = content + " | Property Finder-UAE's number one"
    }
    else{
      tag.innerText = "Property Finder-UAE's number one"
    }
  });
};

export default useSetTitle;