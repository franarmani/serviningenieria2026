# Script para hacer todas las fuentes responsive en el proyecto
# Ejecutar desde la raíz del proyecto: .\make-fonts-responsive.ps1

Write-Host "Haciendo fuentes responsive en todos los archivos..." -ForegroundColor Green

# Definir patrones de reemplazo
$replacements = @(
    # text-7xl
    @{Pattern = 'text-7xl(?!\s)'; Replace = 'text-5xl sm:text-6xl lg:text-7xl'},
    
    # text-6xl
    @{Pattern = 'text-6xl(?![\s)])'; Replace = 'text-4xl sm:text-5xl lg:text-6xl'},
    
    # text-5xl
    @{Pattern = 'text-5xl(?![\s)])'; Replace = 'text-3xl sm:text-4xl lg:text-5xl'},
    
    # text-4xl (si no tiene ya sm:)
    @{Pattern = '(?<!sm:)text-4xl(?![\s)])'; Replace = 'text-2xl sm:text-3xl lg:text-4xl'},
    
    # text-3xl (si no tiene ya sm:)
    @{Pattern = '(?<!sm:)(?<!lg:)text-3xl(?![\s)])'; Replace = 'text-xl sm:text-2xl lg:text-3xl'},
    
    # text-2xl (si no tiene ya sm:)
    @{Pattern = '(?<!sm:)(?<!lg:)text-2xl(?![\s)])'; Replace = 'text-lg sm:text-xl lg:text-2xl'},
    
    # text-xl (si no tiene ya sm:)
    @{Pattern = '(?<!sm:)(?<!md:)(?<!lg:)text-xl(?![\s)])'; Replace = 'text-base sm:text-lg md:text-xl'},
    
    # text-lg (si no tiene ya sm:)
    @{Pattern = '(?<!sm:)(?<!md:)text-lg(?![\s)])'; Replace = 'text-sm sm:text-base md:text-lg'},
    
    # text-base (si no tiene ya sm:)
    @{Pattern = '(?<!sm:)text-base(?![\s)])'; Replace = 'text-sm sm:text-base'},
    
    # text-sm (si no tiene ya text-xs sm:text-sm)
    @{Pattern = '(?<!xs\s)(?<!sm:)text-sm(?![\s)])'; Replace = 'text-xs sm:text-sm'}
)

# Obtener todos los archivos .jsx en src/pages
$files = Get-ChildItem -Path "src/pages" -Filter "*.jsx" -Recurse

$totalFiles = $files.Count
$currentFile = 0

foreach ($file in $files) {
    $currentFile++
    Write-Host "[$currentFile/$totalFiles] Procesando: $($file.Name)" -ForegroundColor Cyan
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    $changesMade = 0
    
    foreach ($replacement in $replacements) {
        $before = $content
        $content = $content -replace $replacement.Pattern, $replacement.Replace
        
        if ($before -ne $content) {
            $matches = ([regex]::Matches($before, $replacement.Pattern)).Count
            $changesMade += $matches
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "  ✓ $changesMade cambios aplicados" -ForegroundColor Green
    } else {
        Write-Host "  - Sin cambios necesarios" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Completado! Se procesaron $totalFiles archivos." -ForegroundColor Green
Write-Host "Por favor, revisa los cambios y prueba la aplicacion." -ForegroundColor Yellow
