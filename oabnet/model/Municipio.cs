using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace oabnet.model
{
    public class Municipio
    {
        [Key]
        public int Id { get; set; }
        public int UfId { get; set; }
        [Required, StringLength(255)]
        public string Nome { get; set; }

        [ForeignKey("UfId")]
        public virtual Uf Uf { get; set; }
    }
}
