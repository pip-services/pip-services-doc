Now, we must add a csproj files with the following lines to the next project folders:

**src/interface/Interface.csproj**

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netstandard2.1</TargetFramework>
    <RootNamespace>Beacons</RootNamespace>
    <AssemblyName>Beacons</AssemblyName>
    <ApplicationIcon />
    <Win32Resource />
    <Version>1.0.0</Version>
    <Authors>Sergey Seroukhov</Authors>
    <Copyright>Conceptual Vision Consulting LLC 2018</Copyright>
    <Description>Beacons microservice client</Description>
    <Company>Conceptual Vision Consulting LLC</Company>
    <Product>Beacons</Product>
    <PackageLicenseUrl>http://opensource.org/licenses/MIT</PackageLicenseUrl>
    <PackageProjectUrl>https://github.com/pip-services/pip-services</PackageProjectUrl>
    <PackageIconUrl>https://github.com/pip-services/pip-services/design/Logo.png</PackageIconUrl>
    <PackageTags>microservices beacons</PackageTags>
    <GeneratePackageOnBuild>true</GeneratePackageOnBuild>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="PipServices3.Commons" Version="3.1.2" />
  </ItemGroup>

</Project>

```

**src/interface/Process.csproj**

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net5.0</TargetFramework>
    <AssemblyName>main</AssemblyName>
    <RootNamespace>Beacons</RootNamespace>
  </PropertyGroup>

  <ItemGroup>
    <ProjectReference Include="..\Service\Service.csproj" />
  </ItemGroup>

</Project>

```

**src/interface/Service.csproj**
```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netstandard2.1</TargetFramework>
    <RootNamespace>Beacons</RootNamespace>
    <AssemblyName>Beacons.Service</AssemblyName>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="PipServices3.Commons" Version="3.1.2" />
    <PackageReference Include="PipServices3.Components" Version="3.2.1" />
    <PackageReference Include="PipServices3.Container" Version="3.1.2" />
    <PackageReference Include="PipServices3.Data" Version="3.2.3" />
    <PackageReference Include="PipServices3.MongoDb" Version="3.3.0" />
    <PackageReference Include="PipServices3.Rpc" Version="3.4.1" />
    <PackageReference Include="PipServices3.Expressions" Version="3.1.0" />
    <PackageReference Include="PipServices3.Swagger" Version="3.0.2" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\Interface\Interface.csproj" />
  </ItemGroup>

  <ItemGroup>
    <Compile Remove="src\Interface\Data\Version1\BeaconTypeV1.cs" />
    <Compile Remove="test\Service.Test\Interface\Data\Version1\TestModel.cs" />
    <Compile Remove="Persistence\BeaconsMongoDbSchema.cs" />
  </ItemGroup>
</Project>

```
