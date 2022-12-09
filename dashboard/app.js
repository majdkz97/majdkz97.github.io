$(document).ready(function () {

    getServicesFunction(true);

    $('[data-toggle="tooltip"]').tooltip();
    var actions = `
     
      <a class="add"  title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
      <a class="edit" title="Edit" data-toggle="tooltip"><i
              class="material-icons">&#xE254;</i></a>
      <a class="delete" title="Delete" data-toggle="tooltip"><i
              class="material-icons">&#xE872;</i></a>
  
    `;
    // Append table with add row form on add new button click
    $(".add-new").click(function () {
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
        '<td></td>' +
        '<td><input type="text" class="form-control" name="title" id="title"></td>' +
        '<td><input type="text" class="form-control" name="description" id="description"></td>' +
            '<td><input type="text" class="form-control" name="details" id="details"></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });

      // refresh data
      $(".refresh").click(function () {
        getServicesFunction(true);
    });


    // Add row on add button click
    $(document).on("click", ".add", function () {
        
        
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else {
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            
        var id = $(this).attr('id');

        if(id!=null) //is add after edit
        {
            var link = updateSerivceUrl+"?id="+id+"&";

            input.each(function () {
                var paramName = $(this).attr('id');
                var paramValue = $(this).val();
                link+=paramName+"="+paramValue+"&";

            });

            fetch(link)
            .then(response => {
                $(this).parents("tr").find(".add, .edit").toggle();
                $(".add-new").removeAttr("disabled");
                getServicesFunction(true);
            });
 
        }
        else //is add new
        {
            var link = addSerivceUrl+"?";

            input.each(function () {
                var paramName = $(this).attr('id');
                var paramValue = $(this).val();
                link+=paramName+"="+paramValue+"&";

            });

            fetch(link)
            .then(response => {
                $(this).parents("tr").find(".add, .edit").toggle();
                $(".add-new").removeAttr("disabled");
                getServicesFunction(true);
            });
 
        }
       
        
        }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function () {
        $(this).parents("tr").find("td:not(:last-child):not(:first-child)").each(function () {
            var id = $(this).attr('id');
         

            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '" id="'+id+'">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function () {
        var id = $(this).attr('id');
        console.log(id);
        fetch(deleteSerivceUrl+"?id="+id)
        .then(response => {
            $(this).parents("tr").remove();
            $(".add-new").removeAttr("disabled");
            getServicesFunction(true);
        });
     
    });
});



