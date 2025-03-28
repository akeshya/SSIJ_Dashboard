import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Select, SelectItem } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Image } from "@/components/ui/image";
// import { Upload } from "@/components/ui/upload";
// import { ChevronDown } from "lucide-react";

const CreateProduct = () => {
  // const [stockQuantity, setStockQuantity] = useState(17);
  // const [grossWeight, setGrossWeight] = useState("45.690");

  return (
    // <div className="p-6 w-full flex flex-col gap-6">
    //   {/* Page Title */}
    //   <h1 className="text-2xl font-semibold">Create New Product</h1>

    //   {/* General Information */}
    //   <Card>
    //     <CardContent className="p-4 space-y-4">
    //       <label className="block text-sm font-medium">Product Title</label>
    //       <Input
    //         placeholder="Enter product title"
    //         value="Choker 5005"
    //         readOnly
    //       />

    //       <label className="block text-sm font-medium">Description</label>
    //       <Textarea readOnly value="Stone Weight: 6.150\nNet Weight: 39.540" />
    //     </CardContent>
    //   </Card>

    //   {/* Media */}
    //   <Card>
    //     <CardContent className="p-4">
    //       <label className="block text-sm font-medium">Media</label>
    //       <div className="flex gap-4">
    //         <Image
    //           src="/image01.png"
    //           alt="Product Image 1"
    //           className="w-24 h-24"
    //         />
    //         <Image
    //           src="/image02.png"
    //           alt="Product Image 2"
    //           className="w-24 h-24"
    //         />
    //         <Upload className="w-24 h-24 border-dashed border-2" />
    //       </div>
    //     </CardContent>
    //   </Card>

    //   {/* Categories */}
    //   <Card>
    //     <CardContent className="p-4">
    //       <label className="block text-sm font-medium">Categories</label>
    //       <Tabs defaultValue="Finger Rings">
    //         <TabsList>
    //           <TabsTrigger value="Earrings">Earrings</TabsTrigger>
    //           <TabsTrigger value="Finger Rings">Finger Rings</TabsTrigger>
    //           <TabsTrigger value="Neckwear">Neckwear</TabsTrigger>
    //         </TabsList>
    //       </Tabs>
    //     </CardContent>
    //   </Card>

    //   {/* Purchase Information */}
    //   <Card>
    //     <CardContent className="p-4 flex gap-6">
    //       <div>
    //         <label className="block text-sm font-medium">Gross Weight</label>
    //         <Input value={grossWeight} readOnly />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium">Stock Quantity</label>
    //         <Select
    //           onValueChange={setStockQuantity}
    //           value={stockQuantity.toString()}
    //         >
    //           {[...Array(20).keys()].map((num) => (
    //             <SelectItem key={num} value={num.toString()}>
    //               {num}
    //             </SelectItem>
    //           ))}
    //         </Select>
    //       </div>
    //     </CardContent>
    //   </Card>

    //   {/* Publish */}
    //   <Card>
    //     <CardContent className="p-4 space-y-4">
    //       <label className="block text-sm font-medium">Publish</label>
    //       <div className="flex gap-2">
    //         <Button variant="outline">Save as Draft</Button>
    //         <Button>Publish</Button>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
      </div>
    </div>
  );
};

export default CreateProduct;
